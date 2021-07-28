using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Phonebook.Webapi.Models
{
    public class PhoneBookModel
    {
        public PhoneBookModel()
        {
            entries = new List<EntryModel>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public List<EntryModel> entries { get; set; }
    }
}
