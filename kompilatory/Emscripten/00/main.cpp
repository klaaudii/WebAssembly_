#include <iostream>
#include <fstream>

int main() {
    std::ofstream file("example.txt");
    if (file.is_open()) {
        file << "Hello, world!";
        file.close();
        std::cout << "File successfully created and data written." << std::endl;
    } else {
        std::cerr << "Unable to open file." << std::endl;
        return 1;
    }

    std::ifstream readFile("example.txt");
    if (readFile.is_open()) {
        std::string line;
        std::cout << "Data read from file:" << std::endl;
        while (std::getline(readFile, line)) {
            std::cout << line << std::endl;
        }
        readFile.close();
    } else {
        std::cerr << "Unable to open file for reading." << std::endl;
        return 1;
    }

    return 0;
}