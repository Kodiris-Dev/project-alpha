using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
namespace MongodbTest
{
    public class Cluster
    {
        private const string url = "mongodb+srv://Luis:QUERVbro07@faultaria.8srnc.mongodb.net/<dbname>?retryWrites=true&w=majority";
        private const string databaseName = "first-test";

        public MongoClient Client { get; set; }
        public IMongoDatabase Database { get; set; }
        public IMongoCollection<BsonDocument> Users { get; private set; }
        public IMongoCollection<BsonDocument> Meta { get; private set; }
        public int UserCount { get; private set; }

        public Cluster()
        {
            Client = new MongoClient(url);

            Database = Client.GetDatabase("first-test");

            Users = Database.GetCollection<BsonDocument>("users");

            Meta = Database.GetCollection<BsonDocument>("meta");

            var countFilter = Builders<BsonDocument>.Filter.Eq("name", "meta");
            UserCount = Meta.Find(countFilter).ToList()[0].GetElement("userCount").Value.AsInt32;
        }

        public void AddUser(IAmDocument user)
        {
            BsonDocument document = user.ToDocument();

            UserCount++;

            document.Add(new BsonElement("id", UserCount.ToString()));

            Users.InsertOne(document);

        }

        public IEnumerable<User> GetAllUsers()
        {
            FilterDefinition<BsonDocument> filter = Builders<BsonDocument>.Filter.Empty;
            
            List<BsonDocument> userList = Users.Find(filter).ToList();

            User[] users = new User[userList.Count];

            int count = 0;
            foreach (BsonDocument doc in userList)
            {
                string n = doc.GetElement("name").Value.AsString;

                string id = doc.GetElement("id").Value.AsString;

                User user = new User(n);

                user.id = id;

                users[count++] = user;
            }

            return users;
        }

        public User FindUserByName(string name)
        {
            FilterDefinition<BsonDocument> filter = Builders<BsonDocument>.Filter.Eq("name", name);

            List<BsonDocument> list = Users.Find(filter).ToList();

            BsonDocument doc = list[0];

            string n = doc.GetElement("name").Value.AsString;

            string id = doc.GetElement("id").Value.AsString;

            User user = new User(n);

            user.id = id;

            return user;
        }

        public User FindUserByID(string idNum)
        {
            FilterDefinition<BsonDocument> filter = Builders<BsonDocument>.Filter.Eq("id", idNum);

            List<BsonDocument> list = Users.Find(filter).ToList();

            BsonDocument doc = list[0];

            string n = doc.GetElement("name").Value.AsString;

            string id = doc.GetElement("id").Value.AsString;

            User user = new User(n);

            user.id = id;

            return user;
        }
    }
}
