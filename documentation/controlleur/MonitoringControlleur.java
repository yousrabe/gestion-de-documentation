package doc.example.documentation.controlleur;

import doc.example.documentation.DAO.Ijob;
import doc.example.documentation.DAO.Imonitoring;
import doc.example.documentation.entité.Job;
import doc.example.documentation.entité.Monitoring;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/monitoring")
public class MonitoringControlleur {
    @Autowired
    private Imonitoring imonitoring;
    @GetMapping("/all")
    public List<Monitoring> getAllDocuments()
    {
        return imonitoring.findAll();}

    @PostMapping("/add")
    public Monitoring add(@RequestBody Monitoring document)
    {
        return imonitoring.save(document)  ;   }

    @PutMapping("/update")
    public Monitoring update(@RequestBody Monitoring document)
    {
        return imonitoring.saveAndFlush(document);
    }
    @DeleteMapping("/delete")
    public String supprimer( @RequestBody Long idJob)
    {
        try{
            imonitoring.deleteById(idJob);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }

}
