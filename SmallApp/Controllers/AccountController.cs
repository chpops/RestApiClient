//using System.Collections.Generic;
//using System.Linq;
//using Microsoft.AspNetCore.Mvc;
//using SmallApp.Models;

//namespace HelloAngularApp.Controllers
//{
//  [ApiController]
//  [Route("api/account")]
//  public class AccountController : Controller
//  {
//    ApplicationContext db;
//    public AccountController(ApplicationContext context)
//    {
//      db = context;
//      if ( !db.AccountDatas.Any() )
//      {
//        //db.AccountDatas.Add(new AccountData { Login = "Test" , Password = "qwe123" , Email = "test@email.test" , Permisson = 2 });
//      }
//    }

//    [HttpGet]
//    public IEnumerable<AccountData> Get()
//    {
//      return db.AccountDatas.ToList();
//    }

//    [HttpGet("{login}")]
//    public AccountData Get(string login)
//    {
//      AccountData data = db.AccountDatas.FirstOrDefault(x => x.Login == login);
//      return data;
//    }

//    [HttpPost]
//    public IActionResult Post(AccountData data)
//    {
//      if ( ModelState.IsValid )
//      {
//        db.AccountDatas.Add(data);
//        db.SaveChanges();
//        return Ok(data);
//      }
//      return BadRequest(ModelState);
//    }

//    [HttpPut]
//    public IActionResult Put(AccountData data)
//    {
//      if ( ModelState.IsValid )
//      {
//        db.Update(data);
//        db.SaveChanges();
//        return Ok(data);
//      }
//      return BadRequest(ModelState);
//    }
//  }
//}