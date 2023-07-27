
def check_palindrome_or_reverse():
    word = input("Enter a word: ")
    reversed_word = word[::-1]
    if word == reversed_word:
        print("Yes, it is a palindrome.")
    else:
        print(f"No, it is not a palindrome. Reversed: {reversed_word}")

check_palindrome_or_reverse()





