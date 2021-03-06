﻿using System;

//Problem 1. Square root

//    Write a program that reads an integer number and calculates and prints its square root.
//        If the number is invalid or negative, print Invalid number.
//        In all cases finally print Good bye.
//    Use try-catch-finally block.

namespace _01SquareRoot
{
    class SquareRoot
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Input integer:");
            int n = 0;
            try
            {
                n = int.Parse(Console.ReadLine());
                if (n < 1)
                    throw new ArgumentOutOfRangeException();
                double squareRoot = Math.Sqrt(n);
                Console.WriteLine("The square root is:");
                Console.WriteLine(squareRoot);
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid number");
            }
            catch (ArgumentOutOfRangeException)
            {
                Console.WriteLine("Invalid number");
            }
            finally 
            {
                Console.WriteLine("Good bye");
            }
        }
    }
}
