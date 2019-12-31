package doc.example.documentation.controlleur;
import doc.example.documentation.DAO.Ichange;
import doc.example.documentation.entité.Change;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin("*")
@RequestMapping("/changes")
public class ChangeControlleur {
    @Autowired
    private Ichange ichange;

    @GetMapping("/all")
    public List<Change> getAllChanges()
    {
        return ichange.findAll();}

    @PostMapping("/add")
    public Change add(@RequestBody Change document)
    {
        return ichange.save(document)  ;   }

    @PutMapping("/update")
    public Change update(@RequestBody Change document)
    {
        return ichange.saveAndFlush(document);
    }
    @DeleteMapping("/remove")
    public String remove(Long idChange)
    {
        try{
            ichange.deleteById(idChange);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }



}
