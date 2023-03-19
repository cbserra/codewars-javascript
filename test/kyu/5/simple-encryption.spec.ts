import { encrypt, decrypt } from '../../../src/kyu/5/simple-encryption'
import { assert } from 'chai'

describe('simple-encryption tests', function () {
  it('Basic Tests', function () {
    // Basic Encrypt Tests
    assert.equal(
      encrypt(
        'Do the kata "Kobayashi-Maru-Test!" Endless fun and excitement when finding a solution!'
      ),
      "$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"
    )
    assert.equal(encrypt('This is a test!'), '5MyQa9p0riYplZc')
    assert.equal(encrypt('This kata is very interesting!'), "5MyQa79H'ijQaw!Ns6jVtpmnlZ.V6p")

    // Basic Decrypt Tests
    assert.equal(
      decrypt(
        "$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"
      ),
      'Do the kata "Kobayashi-Maru-Test!" Endless fun and excitement when finding a solution!'
    )
    assert.equal(decrypt('5MyQa9p0riYplZc'), 'This is a test!')
    assert.equal(decrypt("5MyQa79H'ijQaw!Ns6jVtpmnlZ.V6p"), 'This kata is very interesting!')

    // Null or Empty
    assert.equal(encrypt(''), '')
    assert.equal(decrypt(''), '')
    // Not assignable to type string
    // assert.equal(encrypt(null), null);
    // assert.equal(decrypt(null), null);
  })

  it('Extended Tests', function () {
    // Not Allowed Chars
    assert.throws(function () {
      encrypt('A5#')
    })
    assert.throws(function () {
      decrypt('A5#')
    })
  })
  it('Random Tests', function () {
    // Random Tests

    const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! \'()$%&"'
    function myEncrypt(text: string) {
      if (!text) {
        return text
      }
      for (var i = 0; i < text.length; i++) {
        if (table.indexOf(text[i]) == -1) {
          throw new Error()
        }
      }

      let r = ''
      for (var i = 0; i < text.length; i++) {
        let c = text[i] + ''
        if ((i & 1) == 1) {
          c = c[0] > 'Z' ? (c = c.toUpperCase()) : (c = c.toLowerCase())
        }
        r += c
      }
      text = ''

      for (var i = 1; i < r.length; i++) {
        let ind = table.indexOf(r[i - 1]) - table.indexOf(r[i])
        if (ind < 0) {
          ind += 77
        }

        text += table[ind]
      }
      text = table[76 - table.indexOf(r[0])] + text
      return text
    }

    function myDecrypt(encryptedText: string) {
      if (!encryptedText) {
        return encryptedText
      }

      for (var i = 0; i < encryptedText.length; i++) {
        if (table.indexOf(encryptedText[i]) == -1) {
          throw new Error()
        }
      }

      let r
      encryptedText =
        (r = table[76 - table.indexOf(encryptedText[0])] + '') + encryptedText.substring(1)
      for (var i = 1; i < encryptedText.length; i++) {
        let ind = table.indexOf(r[i - 1]) - table.indexOf(encryptedText[i])
        if (ind < 0) {
          ind += 77
        }

        r += table[ind]
      }

      let text = ''

      for (var i = 0; i < r.length; i++) {
        let c = r[i] + ''
        if ((i & 1) == 1) {
          c = c[0] > 'Z' ? (c = c.toUpperCase()) : (c = c.toLowerCase())
        }
        text += c
      }
      return text
    }

    for (let j = 0; j < 20; j++) {
      const length = Math.floor(Math.random() * 68 + 1)

      let text = ''
      for (let i = 0; i < length; i++) {
        const newCharInt = Math.floor(Math.random() * 76)
        const newChar = table[newCharInt]

        text += newChar
      }

      assert.equal(
        encrypt(text),
        myEncrypt(text),
        'Encrypt should also work for random-string ' + text
      )
      assert.equal(
        decrypt(text),
        myDecrypt(text),
        'Decrypt should also work for random-string ' + text
      )
    }
  })
})
