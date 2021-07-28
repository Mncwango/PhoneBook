using AutoMapper;
using Phonebook.Entities;
using Phonebook.Webapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Phonebook.Webapi
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<PhoneBookModel, PhoneBook>().ReverseMap();
            CreateMap<EntryModel, Entry>().ReverseMap();
        }
    }
}
