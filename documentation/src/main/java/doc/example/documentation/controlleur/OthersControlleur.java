package doc.example.documentation.controlleur;

import doc.example.documentation.DAO.Imysql;
import doc.example.documentation.DAO.Iothers;
import doc.example.documentation.entité.Mysql;
import doc.example.documentation.entité.Others;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/others")
public class OthersControlleur {
    @Autowired
    private Iothers iothers;
    @GetMapping("/all")
    public List<Others> getAllDocuments()
    {
        return iothers.findAll();}

    @PostMapping("/add")
    public Others add(@RequestBody Others document)
    {
        return iothers.save(document)  ;   }

    @PutMapping("/update")
    public Others update(@RequestBody Others document)
    {
        return iothers.saveAndFlush(document);
    }
    @DeleteMapping("/remove")
    public String remove(Long idOthers)
    {
        try{
            iothers.deleteById(idOthers);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }
}
