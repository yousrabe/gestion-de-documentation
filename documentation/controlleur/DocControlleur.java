package doc.example.documentation.controlleur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/documents")
public class DocControlleur {

    @Autowired
    private IDoc iDoc;
    @GetMapping("/all")
    public List<Document> getAllDocuments()
    {
        return iDoc.findAll();}


    @PostMapping("/adddocument")
    public Document add(@RequestBody Document document)
    {
        return iDoc.save(document)  ;   }


    @PutMapping("/update")
    public Document update(@RequestBody Document document)
    {
        return iDoc.saveAndFlush(document);
    }

    @DeleteMapping("/remove")
    public String remove( Long idDocu)
    {
           try{
            iDoc.deleteById(idDocu);
            return "ok";
           }
           catch(Exception e)
           {
               return "la";
           }

    }



}
