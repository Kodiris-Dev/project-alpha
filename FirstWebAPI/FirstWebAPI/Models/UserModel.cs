using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FirstWebAPI.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public UserModel(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}