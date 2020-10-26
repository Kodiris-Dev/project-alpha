using MongoDB.Bson;

namespace MongodbTest
{
    public interface IAmDocument
    {
        BsonDocument ToDocument();
    }
}