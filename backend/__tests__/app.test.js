/* eslint-disable no-undef */
import request from 'supertest';
import app from '../src/routes';

describe('Post', () => {
  it('must be able to create new Post', async () => {
    const response = await request(app)
      .post('/post')
      .send({
        author: 'Felipe Sandri',
        content: 'Texto Test',
      });
    expect(response.body).toHaveProperty('id');
  });
});
