const fs = require('fs')
const parser = require('xml2json')

class DataSet {
  #Rows
  constructor(file, rootElement) {
    this.rootElement = rootElement
    this.file = file
    this.#Rows = new Array(0)
  }
  get rows() {
    return this.#Rows
  }
  load() {
    const data = fs.readFileSync(this.file, 'utf-8')
    const jsonData = parser.toJson(data, {object: true})
    const vals = jsonData[this.rootElement]['row']
    this.#Rows.push(...vals)
  }
}

const datasets = {
  badges: new DataSet('data/Badges.xml', 'badges'),
  comments: new DataSet('data/Comments.xml', 'comments'),
  postHistory: new DataSet('data/PostHistory.xml', 'posthistory'),
  postLinks: new DataSet('data/PostLinks.xml', 'postlinks'),
  posts: new DataSet('data/Posts.xml', 'posts'),
  tags: new DataSet('data/Tags.xml', 'tags'),
  users: new DataSet('data/Users.xml', 'users'),
  votes: new DataSet('data/Votes.xml', 'votes')
}

beforeAll(done => {
  datasets.users.load()
  datasets.posts.load()
  done()
})

describe('Working with data', () => {
  test('Validate users', () => {
    expect(datasets.users.rows).toBeTruthy()
    expect(datasets.users.rows.length).toBe(2551)
  })

  test('Validate posts', () => {
    expect(datasets.posts).toBeTruthy()
    expect(datasets.posts.rows.length).toBe(1446)
  })
})

describe('Challenge 03', () => {

  class UserPosted {
    userId
    posts
  }

  test('Inner Join', () => {
    // Given the following two arrays, return an array where there is atleast one match in each array.
    // user.Id and post.OwnerUserId (Review src/model.js for fields)
  })



})