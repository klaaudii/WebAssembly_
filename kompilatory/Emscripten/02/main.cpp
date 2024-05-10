#include <iostream>
#include <emscripten.h>

EM_JS(void, call_js, (int a), {
    console.log(a);
});

extern "C" {
    int main() {
        emscripten_run_script(
            "console.log(add_js(10, 20));");
        call_js(100);
    }
}

extern "C" {
    int add_cpp(int x, int y) {
        return x + y;
    }
}


extern "C" {
std::string string_func(std::string str) {
    return str + " cpp";
}
}