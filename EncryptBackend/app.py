from flask import Flask, request, jsonify
from encryption.aes_handler import encrypt_aes, decrypt_aes
from encryption.rsa_handler import generate_rsa_keys, encrypt_rsa, decrypt_rsa
from cryptography.hazmat.primitives.serialization import Encoding, PrivateFormat, PublicFormat, NoEncryption


app = Flask(__name__)

# AES Endpoints
@app.route('/aes/encrypt', methods=['POST'])
def aes_encrypt():
    data = request.json
    plaintext = data.get('plaintext')
    if not plaintext or not isinstance(plaintext, str):
        return jsonify({'error': 'Invalid plaintext'}), 400
    return jsonify(encrypt_aes(plaintext))

@app.route('/aes/decrypt', methods=['POST'])
def aes_decrypt():
    try:
        data = request.json
        ciphertext = data.get('ciphertext')
        key = data.get('key')
        iv = data.get('iv')
        if not (ciphertext and key and iv):
            raise ValueError("Missing parameters")
        plaintext = decrypt_aes(ciphertext, key, iv)
        return jsonify({'plaintext': plaintext.decode()})
    except ValueError as ve:
        return jsonify({'error': str(ve)}), 400
    except Exception as e:
        return jsonify({'error': 'Decryption failed. Check inputs.'}), 500

# RSA Endpoints
@app.route('/rsa/keys', methods=['GET'])
def rsa_keys():
    private_key, public_key = generate_rsa_keys()
    return jsonify({
        'private_key': private_key.private_bytes(
            encoding=Encoding.PEM,
            format=PrivateFormat.PKCS8,
            encryption_algorithm=NoEncryption()
        ).decode(),
        'public_key': public_key.public_bytes(
            encoding=Encoding.PEM,
            format=PublicFormat.SubjectPublicKeyInfo
        ).decode()
    })
if __name__ == '__main__':
    app.run(debug=True)
