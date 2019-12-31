package doc.example.documentation.controlleur;

import doc.example.documentation.DAO.Iuser;
import doc.example.documentation.entité.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("users")
public class UserControlleur  {
    @Autowired
    private Iuser iuser;

    @GetMapping("/all")

    public List<User> getAllUsers()
    {
        return iuser.findAll();}


    @PostMapping("/add")
    public User add(@RequestBody User user)
    {
        return iuser.save(user)  ;   }

    @PutMapping("/update")
    public User update(@RequestBody User user)
    {
        return iuser.saveAndFlush(user);
    }
    @DeleteMapping("/delete")
    public String supprimer(@RequestBody Long idUser)
    {
        try{
            iuser.deleteById(idUser);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }



}
