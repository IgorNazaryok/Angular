using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class PostsController : Controller
    {
        BlogDbContext db;

        public PostsController(BlogDbContext context)
        {
            db = context;
        }

       [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> Get()
        {
            return await db.Posts.ToListAsync();
        }

       
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> Get(int id)
        {
            Post Post = await db.Posts.FirstOrDefaultAsync(x => x.Id == id);
            if (Post == null)
                return NotFound();
            return new ObjectResult(Post);
        }


        [HttpPost]
        public async Task<ActionResult<Post>> Post(Post post)
        {
            if (post == null)
            {
                return BadRequest();
            }

            db.Posts.Add(post);
            await db.SaveChangesAsync();
            return Ok();
        }


        [HttpPut]
        public async Task<ActionResult<Post>> Put(Post post)
        {
            if (post == null)
            {
                return BadRequest();
            }
            if (!db.Posts.Any(x => x.Id == post.Id))
            {
                return NotFound();
            }

            db.Update(post);
            await db.SaveChangesAsync();
            return Ok(post);
        }

 
        [HttpDelete("{id}")]
        public async Task<ActionResult<Post>> Delete(int id)
        {
            Post post = db.Posts.FirstOrDefault(x => x.Id == id);
            if (post == null)
            {
                return NotFound();
            }
            db.Posts.Remove(post);
            await db.SaveChangesAsync();
            return Ok(post);
        }
    }
}
