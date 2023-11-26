const idCode = {

    genRandomCharacter() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        return characters.charAt(Math.floor(Math.random() * charactersLength));
    },

    async genStringPropertyCode() {
        let letter = ''; 
        for(let i = 0; i < 2; i++) {
            letter += this.genRandomCharacter();
        }
        const currentDate = new Date();
        const year = currentDate.getFullYear().toString().slice(-2);
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        let numbers = [];
        // const numberCount = 99;
        let startNumber = 1;
        for (let i = 0; i < 1; i++) {
            numbers.push(parseInt(`${month}${startNumber.toString().padStart(2, '0')}`));
            startNumber++;
        }
        console.log(startNumber);

        const resolvedNumbers = await Promise.all(numbers);
        const stringCode = `${letter}${day}${month}${year}${resolvedNumbers[0]}`;
        return stringCode;
    },

    async genStringFullContractCode() {
        let letterFullContract = ''; 
        for(let i = 0; i < 2; i++) {
            letterFullContract += this.genRandomCharacter();
        }
        const date = new Date();
        const currentYear = date.getFullYear().toString().slice(-2);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        
        let numbers = [];
        // const numberCount = 99;
        let startNumber = 1;
        for (let i = 0; i < 1; i++) {
            numbers.push(parseInt(`${month}${startNumber.toString().padStart(2, '0')}`));
            startNumber++;
        }

        const resolvedNumbers = await Promise.all(numbers);
        const stringContractCode = `${currentYear}${letterFullContract}${resolvedNumbers[0]}`;
        return stringContractCode;
    }
}
module.exports = idCode;