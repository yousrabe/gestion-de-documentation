package doc.example.documentation.controlleur;
import doc.example.documentation.DAO.Idoc;
import doc.example.documentation.entité.Docu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("*")
@RequestMapping("documents")
public class DocuController {
        @Autowired
        private Idoc idoc;

        @GetMapping("/all")
        public List<Docu> getAllDocuments()
        {
            return idoc.findAll();}


        @PostMapping("/adddo")
        public Docu adddo(@RequestBody Docu document)
        {
            return idoc.save(document)  ;   }

        @PutMapping("/update")
        public Docu update(@RequestBody Docu document)
        {
            return idoc.saveAndFlush(document);
        }
    @DeleteMapping("/remove")
    public String remove(Long idD)
    {
        try{
            idoc.deleteById(idD);
            return "ok";
        }
        catch(Exception e)
        {
            return "la";
        }

    }
}
