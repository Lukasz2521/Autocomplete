const createElementTemp = () => {
    const body = document.querySelector('body');
    const source = document.createElement('input');
    source.setAttribute('id', 'source');
    //source.setAttribute('')
    body.appendChild(source);
}

const createHintList = (element) => {
    if (element) {

    }
}

const getData = async (source) => {
    let response = await fetch(source);
    return await response.json();
};

const findMatchingHints = (word, data) => {

};

const autocompleteManager = (selector, options) => {
    const input = document.querySelector(selector);
    input.addEventListener('keydown', () => {
        if (input.value.length > 0) {
            let data = (async () => await getData())(); // TODO - add data to cache
            findMatchingHints(input.value, data);
        }
    }, false);
}

const autocomplete = (selector = '', options = {}) => {
    if (selector.length === 0 || selector === '') {
        throw Error('Selector is undefined');
    }

    createElementTemp(); // TODO - remove
    autocompleteManager(selector, options);
}

autocomplete('#source', {});

export default autocomplete;