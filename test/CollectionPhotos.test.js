
const Photo = artifacts.require("Photo");

require('chai').use(require('chai-as-promised')).should()

contract('Photo', (accounts) => {
	let photo

	before(async () => {
	    photo = await Photo.deployed()
	})

    describe('deployment', async() =>{
        it('deploys successfully', async() => {
            const address = photo.address
            assert.notEqual(address, 0x0)
            assert.notEqual('')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
	})

	describe('storage', async() => {
		it('updates the photoHash', async () => {
		    let photoHash
			photoHash = 'abc123'
			await photo.set(photoHash)
			const result = await photo.get()
			assert.equal(result, photoHash)
	    })
    })

})