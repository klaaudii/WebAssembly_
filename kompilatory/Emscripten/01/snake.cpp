// emsdk activate if new cmd
// emcc snake.cpp -s WASM=1 -s USE_SDL=2 -o snake.html

// make ... (makefile)
#include <iostream>
#include <SDL.h>
#include <vector>
#include <random>
#include <emscripten.h>

const int SCREEN_WIDTH = 600;
const int SCREEN_HEIGHT = 600;
const int GRID_SIZE = 20;
const int SNAKE_SPEED = 15;


struct Point
{
    int x, y;
};

struct Snake
{
    Point direction;
    std::vector<Point> parts;
    int score;
    int currentFrame = 0;
};

struct Apple
{
    Point position;
};


Snake snake;
Apple apple;
SDL_Window *window = nullptr;
SDL_Renderer *renderer = nullptr;


void checkSdl() {
    if (SDL_Init(SDL_INIT_VIDEO) != 0) {
        std::cerr << "Error initializing SDL: " << SDL_GetError() << std::endl;
        std::exit(EXIT_FAILURE);
    }

    window = SDL_CreateWindow("Snake", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN);
    if (window == nullptr) {
        std::cerr << "Error creating window: " << SDL_GetError() << std::endl;
        std::exit(EXIT_FAILURE);
    }
    renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);
    if (renderer == nullptr) {
        std::cerr << "Error creating renderer: " << SDL_GetError() << std::endl;
        std::exit(EXIT_FAILURE);
    }
}


void init()
{
    checkSdl();

    snake.parts = {{SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2}, {SCREEN_WIDTH / 2 - GRID_SIZE, SCREEN_HEIGHT / 2}, {SCREEN_WIDTH / 2 - 2 * GRID_SIZE, SCREEN_HEIGHT / 2}};
    snake.direction = {GRID_SIZE, 0};
    snake.score = 0;
    apple.position = {std::rand() % (SCREEN_WIDTH / GRID_SIZE) * GRID_SIZE,
                         std::rand() % (SCREEN_HEIGHT / GRID_SIZE) * GRID_SIZE};
}

void quit()
{
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
}


void processInput(SDL_Event event)
{
    switch (event.type) {
    case SDL_QUIT:
        emscripten_cancel_main_loop();
        break;
    case SDL_KEYDOWN:
        switch (event.key.keysym.sym) {
        case SDLK_UP:
            if (snake.direction.y != GRID_SIZE) {
                snake.direction = {0, -GRID_SIZE};
            }
            break;
        case SDLK_DOWN:
            if (snake.direction.y != -GRID_SIZE) {
                snake.direction = {0, GRID_SIZE};
            }
            break;
        case SDLK_LEFT:
            if (snake.direction.x != GRID_SIZE) {
                snake.direction = {-GRID_SIZE, 0};
            }
            break;
        case SDLK_RIGHT:
            if (snake.direction.x != -GRID_SIZE) {
                snake.direction = {GRID_SIZE, 0};
            }
            break;
        }
        break;
    }
}

void update()
{
    if (++snake.currentFrame != SNAKE_SPEED)
        return;
    snake.currentFrame = 0;

    Point head = {snake.parts[0].x + snake.direction.x, snake.parts[0].y + snake.direction.y};

    if (head.x < 0 || head.x >= SCREEN_WIDTH || head.y < 0 || head.y >= SCREEN_HEIGHT) {
        std::cout << "Game over! Score: " << snake.score << std::endl;
        emscripten_cancel_main_loop();
    }

    snake.parts.insert(snake.parts.begin(), head);
    snake.parts.pop_back();

    if (head.x == apple.position.x && head.y == apple.position.y) {
        apple.position = {std::rand() % (SCREEN_WIDTH / GRID_SIZE) * GRID_SIZE,
                           std::rand() % (SCREEN_HEIGHT / GRID_SIZE) * GRID_SIZE};
        snake.parts.push_back(snake.parts.back());
        snake.score++;
    }

    for (int i = 1; i < snake.parts.size(); i++) {
        if (head.x == snake.parts[i].x && head.y == snake.parts[i].y) {
            std::cout << "Game over! Score: " << snake.score << std::endl;
            emscripten_cancel_main_loop();
        }
    }
}

void render()
{
    SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
    SDL_RenderClear(renderer);

    SDL_SetRenderDrawColor(renderer, 255, 0, 0, 255);
    SDL_Rect apple_rect = {apple.position.x, apple.position.y, GRID_SIZE, GRID_SIZE};
    SDL_RenderFillRect(renderer, &apple_rect);

    SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);
    for (int i = 0; i < snake.parts.size(); i++) {
        SDL_Rect segment_rect = {snake.parts[i].x, snake.parts[i].y, GRID_SIZE, GRID_SIZE};
        SDL_RenderFillRect(renderer, &segment_rect);
    }

    SDL_RenderPresent(renderer);
}


void gameLoop()
{
    SDL_Event event;
    while (SDL_PollEvent(&event)) {
        processInput(event);
    }
    update();
    render();
}

int main(int argc, char *argv[])
{
    init();
    emscripten_set_main_loop(gameLoop, 0, 1);
    quit();
    return 0;
}