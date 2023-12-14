package Modul_ucheta_BP.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_ucheta_BP.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ДирОтдПоРабСКл
 */
@Entity(name = "IISModul_ucheta_BPДирОтдПоРабСКл")
@Table(schema = "public", name = "ДирОтдПоРабСКл")
public class DirOtdPoRabSKl {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "idДиректора")
    private String idдиректора;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "НомерТел")
    private String номертел;

    @Column(name = "СерияПаспорта")
    private String серияпаспорта;

    @Column(name = "НомерПаспорта")
    private String номерпаспорта;


    public DirOtdPoRabSKl() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getidДиректора() {
      return idдиректора;
    }

    public void setidДиректора(String idдиректора) {
      this.idдиректора = idдиректора;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public String getНомерТел() {
      return номертел;
    }

    public void setНомерТел(String номертел) {
      this.номертел = номертел;
    }

    public String getСерияПаспорта() {
      return серияпаспорта;
    }

    public void setСерияПаспорта(String серияпаспорта) {
      this.серияпаспорта = серияпаспорта;
    }

    public String getНомерПаспорта() {
      return номерпаспорта;
    }

    public void setНомерПаспорта(String номерпаспорта) {
      this.номерпаспорта = номерпаспорта;
    }


}