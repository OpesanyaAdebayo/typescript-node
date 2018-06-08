import * as mongoose from 'mongoose'

const connect = async () => await mongoose.connect('mongodb://graphqltest:graphqltest1@ds153460.mlab.com:53460/graphqltest')

export {connect}