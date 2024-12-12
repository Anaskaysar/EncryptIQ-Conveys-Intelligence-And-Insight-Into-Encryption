from flask import Flask, request, jsonify
from flask_restx import Api, Resource, fields
from encryption.aes_handler import encrypt_aes, decrypt_aes
from encryption.rsa_handler import generate_rsa_keys, encrypt_rsa, decrypt_rsa
from cryptography.hazmat.primitives.serialization import Encoding, PrivateFormat, PublicFormat, NoEncryption
import logging

# Initialize Flask and Flask-RESTX
app = Flask(__name__)
api = Api(app, doc='/docs', title='ElcryptIQ API', description='Interactive API for AES and RSA Encryption Algorithms')

# Logging configuration
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define models for input validation
aes_model = api.model('AES', {
    'plaintext': fields.String(required=True, description='Text to encrypt')
})

aes_decrypt_model = api.model('AESDecrypt', {
    'ciphertext': fields.String(required=True, description='Ciphertext to decrypt'),
    'key': fields.String(required=True, description='Encryption key'),
    'iv': fields.String(required=True, description='Initialization vector')
})

rsa_encrypt_model = api.model('RSAEncrypt', {
    'plaintext': fields.String(required=True, description='Text to encrypt')
})

rsa_decrypt_model = api.model('RSADecrypt', {
    'ciphertext': fields.String(required=True, description='Ciphertext to decrypt'),
    'private_key': fields.String(required=True, description='Private key for decryption')
})

# AES Endpoints
@api.route('/aes/encrypt')
class AESEncrypt(Resource):
    @api.expect(aes_model)
    def post(self):
        data = request.json
        plaintext = data.get('plaintext')
        logger.info(f"Received AES encryption request with input: {data}")
        if not plaintext or not isinstance(plaintext, str):
            api.abort(400, 'Invalid plaintext')
        result = encrypt_aes(plaintext)
        logger.info(f"AES encryption result: {result}")
        return result

@api.route('/aes/decrypt')
class AESDecrypt(Resource):
    @api.expect(aes_decrypt_model)
    def post(self):
        data = request.json
        logger.info(f"Received AES decryption request with input: {data}")
        try:
            ciphertext = data['ciphertext']
            key = data['key']
            iv = data['iv']
            plaintext = decrypt_aes(ciphertext, key, iv)
            result = {'plaintext': plaintext.decode()}
            logger.info(f"AES decryption result: {result}")
            return result
        except KeyError as ke:
            logger.error(f"Missing parameter: {str(ke)}")
            api.abort(400, f'Missing parameter: {str(ke)}')
        except Exception as e:
            logger.error(f'Decryption error: {str(e)}')
            api.abort(500, 'Decryption failed. Check inputs.')

# RSA Endpoints
@api.route('/rsa/keys')
class RSAKeys(Resource):
    def get(self):
        private_key, public_key = generate_rsa_keys()
        result = {
            'private_key': private_key.private_bytes(
                encoding=Encoding.PEM,
                format=PrivateFormat.PKCS8,
                encryption_algorithm=NoEncryption()
            ).decode(),
            'public_key': public_key.public_bytes(
                encoding=Encoding.PEM,
                format=PublicFormat.SubjectPublicKeyInfo
            ).decode()
        }
        logger.info(f"Generated RSA keys: {result}")
        return result

if __name__ == '__main__':
    logger.info("Starting ElcryptIQ API.")
    app.run(debug=True)
