cmake_minimum_required(VERSION 3.23)
project(learning)

set(CMAKE_CXX_STANDARD 14)

include_directories(.)

add_executable(learning
        main.cpp
        random.cpp
        random.h)
