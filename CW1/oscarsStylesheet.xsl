<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns="http://www.w3.org/1999/xhtml">



<xsl:template match="/">
<table border="1">
    <tr>
        <th>Year</th>
        <th>Category</th>
        <th>Nominee</th>
        <th>Info</th>
        <th>Won</th>
    </tr>
    <xsl:for-each select="Oscars/Nomination">
        <tr>
            <td><xsl:value-of select="Year"/></td>
            <td><xsl:value-of select="Category"/></td>
            <td><xsl:value-of select="Nominee"/></td>
            <td><xsl:value-of select="Info"/></td>
            <td><xsl:value-of select="Won"/></td>
        </tr>
    </xsl:for-each>
</table>
</xsl:template>
        </xsl:stylesheet>

