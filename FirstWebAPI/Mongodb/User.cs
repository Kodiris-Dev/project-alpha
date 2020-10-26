using MongoDB.Bson;
using System;


namespace MongodbTest
{
    public class User : IAmDocument
    {
        public string Name { get; set; }
        public string id { get; set; }

        public User()
        {

        }

        public User(string name)
        {
            Name = name;
        }

        public BsonDocument ToDocument()
        {
            return new BsonDocument{ { "name", Name } };
        }
    }
}
