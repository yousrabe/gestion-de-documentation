package doc.example.documentation.controlleur;

import doc.example.documentation.DAO.Ierror;
import doc.example.documentation.DAO.Iinfo;
import doc.example.documentation.entité.Error;
import doc.example.documentation.entité.Informix;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/informix")
public class InformixControlleur {
    @Autowired
    private Iinfo iinfo;
    @GetMapping("/all")
    public List<Informix> getAllDocuments()
    {
        return iinfo.findAll();}

    @PostMapping("/add")
    public Informix add(@RequestBody Informix document)
    {
        return iinfo.save(document)  ;   }

    @PutMapping("/update")
    public Informix update(@RequestBody Informix document)
    {
        return iinfo.saveAndFlush(document);
    }
    @DeleteMapping("/delete")
    public String supprimer( @RequestBody Long idInfo)
    {
        try{
            iinfo.deleteById(idInfo);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }

}
