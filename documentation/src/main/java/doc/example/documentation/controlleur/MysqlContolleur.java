package doc.example.documentation.controlleur;

import doc.example.documentation.DAO.Imonitoring;
import doc.example.documentation.DAO.Imysql;
import doc.example.documentation.entité.Monitoring;
import doc.example.documentation.entité.Mysql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/mysqls")
public class MysqlContolleur {
    @Autowired
    private Imysql imysql;
    @GetMapping("/all")
    public List<Mysql> getAllDocuments()
    {
        return imysql.findAll();}

    @PostMapping("/add")
    public Mysql add(@RequestBody Mysql document)
    {
        return imysql.save(document)  ;   }

    @PutMapping("/update")
    public Mysql update(@RequestBody Mysql document)
    {
        return imysql.saveAndFlush(document);
    }
    @DeleteMapping("/remove")
    public String remove( Long idMysql)
    {
        try{
            imysql.deleteById(idMysql);
            return "yes";
        }
        catch(Exception e)
        {
            return "no";
        }
    }

}
