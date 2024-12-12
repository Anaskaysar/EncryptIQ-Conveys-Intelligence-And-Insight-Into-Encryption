import json
from app import app

# Flask provides a testing client
client = app.test_client()

def test_aes_encryption_decryption():
    # Test AES Encryption
    encryption_response = client.post(
        '/aes/encrypt',
        data=json.dumps({"plaintext": "hello world"}),
        content_type='application/json'
    )
    assert encryption_response.status_code == 200
    encryption_data = encryption_response.get_json()
    assert 'ciphertext' in encryption_data
    assert 'key' in encryption_data
    assert 'iv' in encryption_data

    # Test AES Decryption
    decryption_response = client.post(
        '/aes/decrypt',
        data=json.dumps({
            "ciphertext": encryption_data['ciphertext'],
            "key": encryption_data['key'],
            "iv": encryption_data['iv']
        }),
        content_type='application/json'
    )
    assert decryption_response.status_code == 200
    decryption_data = decryption_response.get_json()
    assert 'plaintext' in decryption_data
    assert decryption_data['plaintext'] == "hello world"

def test_rsa_key_generation():
    # Test RSA Key Generation
    response = client.get('/rsa/keys')
    assert response.status_code == 200
    data = response.get_json()
    assert 'private_key' in data
    assert 'public_key' in data
