package doc.example.documentation.controlleur;

import doc.example.documentation.DAO.Ibackup;
import doc.example.documentation.DAO.Idisk;
import doc.example.documentation.entité.Backup;
import doc.example.documentation.entité.Disk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/disks")
public class DiskControlleur {
    @Autowired
    private Idisk idisk;
    @GetMapping("/all")
    public List<Disk> getAllDocuments()
    {
        return idisk.findAll();}

    @PostMapping("/add")
    public Disk add(@RequestBody Disk document)
    {
        return idisk.save(document)  ;   }

    @PutMapping("/update")
    public Disk update(@RequestBody Disk document)
    {
        return idisk.saveAndFlush(document);
    }

    @DeleteMapping("/remove")
    public String remove( Long idDisk )
    {
        try{
            idisk.deleteById(idDisk);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }

}
