package doc.example.documentation.controlleur;
import doc.example.documentation.DAO.Iconnexion;
import doc.example.documentation.entité.Connexion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/connexions")
public class ConnexionControlleur {
    @Autowired
    private Iconnexion iconnexion;

    @GetMapping("/all")
    public List<Connexion> getAllDocuments() {
        return iconnexion.findAll();
    }

    @PostMapping("/add")
    public Connexion add(@RequestBody Connexion document) {
        return iconnexion.save(document);
    }

    @PutMapping("/update")
    public Connexion update(@RequestBody Connexion document) {
        return iconnexion.saveAndFlush(document);
    }

    @DeleteMapping("/remove")
    public String remove Long idConn) {
        try {
            iconnexion.deleteById(idConn);
            return "yes";
        } catch (Exception e) {
            return "no";
        }
    }
}
