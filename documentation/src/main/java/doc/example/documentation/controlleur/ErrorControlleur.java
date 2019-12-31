package doc.example.documentation.controlleur;


import doc.example.documentation.DAO.Ierror;


import doc.example.documentation.entité.Error;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/errors")
public class ErrorControlleur {

    @Autowired
   private Ierror ierror;
    @GetMapping("/all")
    public List<Error> getAllDocuments()
    {
        return ierror.findAll();}

    @PostMapping("/add")
    public Error add(@RequestBody Error document)
    {
        return ierror.save(document)  ;   }

    @PutMapping("/update")
    public Error update(@RequestBody Error document)
    {
        return ierror.saveAndFlush(document);
    }
    @DeleteMapping("/remove")
    public String remove(Long idError)
    {
        try{
            ierror.deleteById(idError);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }



}
