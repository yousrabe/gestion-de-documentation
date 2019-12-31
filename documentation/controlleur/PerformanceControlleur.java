package doc.example.documentation.controlleur;


import doc.example.documentation.DAO.Iperformance;
import doc.example.documentation.entité.Performance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/performances")
public class PerformanceControlleur {
    @Autowired
    private Iperformance iperformance;
    @GetMapping("/all")
    public List<Performance> getAllPerformance()
    {
        return iperformance.findAll();}

    @PostMapping("/add")
    public Performance add(@RequestBody Performance document)
    {
        return iperformance.save(document)  ;   }

    @PutMapping("/update")
    public Performance update(@RequestBody Performance document)
    {
        return iperformance.saveAndFlush(document);
    }
    @DeleteMapping("/delete")
    public String supprimer( @RequestBody Long idJob)
    {
        try{
            iperformance.deleteById(idJob);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }
}
