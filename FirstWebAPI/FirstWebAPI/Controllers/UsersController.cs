using FirstWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MongodbTest;

namespace FirstWebAPI.Controllers
{
    public class UsersController : ApiController
    {
        Cluster cluster = new Cluster();

        public IEnumerable<UserModel> Get()
        {
            User[] users = (User[]) cluster.GetAllUsers();

            UserModel[] userModels = new UserModel[users.Length];

            int counter = 0;
            foreach (User user in users)
            {
                userModels[counter] = new UserModel(Int32.Parse(user.id), user.Name);
                counter++;
            }

            return userModels;
        }

        public IHttpActionResult GetUser(int id)
        {
            User user = cluster.FindUserByID(id.ToString());

            UserModel model = new UserModel(Int32.Parse(user.id), user.Name);

            if (model == null)
            {
                return NotFound();
            }

            return Ok(model);
        }
    }
}
