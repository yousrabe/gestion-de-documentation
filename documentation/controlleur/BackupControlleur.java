package doc.example.documentation.controlleur;
import doc.example.documentation.DAO.Ibackup;
import doc.example.documentation.entité.Backup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/backups")
public class BackupControlleur {
    @Autowired
    private Ibackup ibackup;
    @GetMapping("/all")
    public List<Backup> getAllDocuments()
    {
        return ibackup.findAll();}

    @PostMapping("/add")
    public Backup add(@RequestBody Backup document)
    {
        return ibackup.save(document)  ;   }

    @PutMapping("/update")
    public Backup update(@RequestBody Backup document)
    {
        return ibackup.saveAndFlush(document);
    }
    @DeleteMapping("/remove")
    public String remove(Long idBackup)
    {
        try{
            ibackup.deleteById(idBackup);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }



}
