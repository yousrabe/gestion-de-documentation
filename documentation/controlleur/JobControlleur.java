package doc.example.documentation.controlleur;

import doc.example.documentation.DAO.Iinfo;
import doc.example.documentation.DAO.Ijob;
import doc.example.documentation.entité.Informix;
import doc.example.documentation.entité.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/jobs")
public class JobControlleur {
    @Autowired
    private Ijob ijob;
    @GetMapping("/all")
    public List<Job> getAllDocuments()
    {
        return ijob.findAll();}

    @PostMapping("/add")
    public Job add(@RequestBody Job document)
    {
        return ijob.save(document)  ;   }

    @PutMapping("/update")
    public Job update(@RequestBody Job document)
    {
        return ijob.saveAndFlush(document);
    }
    @DeleteMapping("/delete")
    public String supprimer( @RequestBody Long idJob)
    {
        try{
            ijob.deleteById(idJob);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }

}
