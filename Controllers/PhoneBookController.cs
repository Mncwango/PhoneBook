using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Phonebook.Entities;
using Phonebook.Services;
using Phonebook.Webapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Phonebook.Webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneBookController : ControllerBase
    {
        private readonly IPhoneBookService _phoneBookService;
        private readonly IMapper _mapper;

        public PhoneBookController(IPhoneBookService phoneBookService, IMapper mapper)
        {
            _phoneBookService = phoneBookService;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("CreatePhoneBookEntry")]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public ActionResult CreatePhoneBookEntry([FromBody] PhoneBookModel phonebook)
        {
            _phoneBookService.CreatePhoneBook(_mapper.Map<PhoneBook>(phonebook));

            return Ok();
        }

        [HttpPost]
        [Route("AddEntry")]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public ActionResult AddEntry([FromBody] EntryModel entry)
        {
            _phoneBookService.AddEntry(_mapper.Map<Entry>(entry));

            return Ok();
        }

        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<PhoneBookModel> GetAll()
        {
            return _mapper.Map<List<PhoneBookModel>>(_phoneBookService.GetAll().ToList());
        }

        [HttpGet]
        [Route("Search")]
        public IEnumerable<PhoneBookModel> Search(string query)
        {
            return _mapper.Map<List<PhoneBookModel>>(_phoneBookService.SearchByName(query).ToList());
        }

    }
}
