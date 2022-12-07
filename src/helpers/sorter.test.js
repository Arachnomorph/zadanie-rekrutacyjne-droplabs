import sorter from './sorter';

test('sorter test', () => {
    expect(sorter([{ title: 'q' }, { title: 'w' }, { title: 'e' }], 'descending')).toEqual(
        [
            {
                "title": "w",
            },
            {
                "title": "q",
            },
            {
                "title": "e",
            },
        ]
    )
})