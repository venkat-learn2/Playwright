const { expect, test } = require('@playwright/test');

let userID1;

test('get', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test('post', async ({ request }) => {
    const userData = {
        "name": "morpheus13",
        "job": "leader"
    };
    const response = await request.post('https://reqres.in/api/users', {
        data: userData,  // Use "data" key
        headers: { "Accept": "application/json" }
    });
    console.log(await response.json());
    expect(response.status()).toBe(201);

    const res = await response.json();
    userID1 = res.id;
    console.log(`User ID is: ${userID1}`);
});

test('put', async ({ request }) => {
    const userData = {
        "name": "morpheus13",
        "job": "leader111"
    };
    const response = await request.put(`https://reqres.in/api/users/${userID1}`, {
        data: userData,  // Use "data" key
        headers: { "Accept": "application/json" }
    });
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test('delete', async ({ request }) => {
    const response = await request.delete(`https://reqres.in/api/users/${userID1}`);
    console.log(await response.json());
    expect(response.status()).toBe(204);
});
