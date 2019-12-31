package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Mysql {
    @Id
    Long idMysql;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;

    public Mysql() {
    }

    public Mysql(Long idMysql, String nomFichier, Date dateMise, String modificateur) {
        this.idMysql = idMysql;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        Modificateur = modificateur;
    }

    public Long getidMysql() {
        return idMysql;
    }

    public void setidMysql(Long idMysql) {
        this.idMysql = idMysql;
    }

    public String getNomFichier() {
        return nomFichier;
    }

    public void setNomFichier(String nomFichier) {
        this.nomFichier = nomFichier;
    }

    public Date getDateMise() {
        return dateMise;
    }

    public void setDateMise(Date dateMise) {
        this.dateMise = dateMise;
    }

    public String getModificateur() {
        return Modificateur;
    }

    public void setModificateur(String modificateur) {
        Modificateur = modificateur;
    }
}
