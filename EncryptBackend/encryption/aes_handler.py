from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import os

def encrypt_aes(plaintext):
    key = os.urandom(16)  # Generate random 128-bit key
    iv = os.urandom(16)   # Generate random initialization vector
    cipher = Cipher(algorithms.AES(key), modes.CFB(iv))
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(plaintext.encode()) + encryptor.finalize()
    return {'ciphertext': ciphertext.hex(), 'key': key.hex(), 'iv': iv.hex()}

def decrypt_aes(ciphertext, key, iv):
    key = bytes.fromhex(key)
    iv = bytes.fromhex(iv)
    ciphertext = bytes.fromhex(ciphertext)
    cipher = Cipher(algorithms.AES(key), modes.CFB(iv))
    decryptor = cipher.decryptor()
    return decryptor.update(ciphertext) + decryptor.finalize()
