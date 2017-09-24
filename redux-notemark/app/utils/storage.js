/**
 * @ local storage
 */

import uuid from "uuid";

const STORAGE = window.localStorage;
const STORAGE_KEY = "notemark";

export function getAll() {
    return new Promise((resolve) => {
        const results = STORAGE.getItem(STORAGE_KEY);

        try {
            resolve(
                results ? JSON.parse(results) : []
            );
        } catch (e) {
            resolve([]);
        }
    });
}

export function saveAll(results) {
    return new Promise((resolve) => {
        STORAGE.setItem(
            STORAGE_KEY,
            JSON.stringify(results)
        );

        resolve();
    });
}

export function getEntry(id) {
    return getAll()
        .then(
            results => results.find(
                result => result.id === id
            )
        )
        .then(saveAll);
}

export function insertEntry(title, content) {
    const entry = {
        title,
        content,
        id: uuid.v4(),
        time: new Date().getTime()
    };

    return getAll()
        .then(results => [...results, entry])
        .then(saveAll)
        .then(() => entry);
}

export function deleteSavedEntry(id) {
    return getAll()
        .then(
            results => results.filter(
                result => result.id !== id
            )
        )
        .then(saveAll);
}

export function updateEntry(id, title, content) {
    let entry;
    return getAll()
        .then(
            results => results.map(
                result => (
                    result.id === id
                        ? (entry = {
                            ...result,
                            title,
                            content
                        })
                        : result
                )
            )
        )
        .then(saveAll)
        .then(() => entry);
}
