<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns="http://www.w3.org/1999/xhtml">



<xsl:template match="/">
    <html>
        <body>
             <table>
                <tr>
                    <th>Year</th>
                    <th>Category</th>
                    <th>Nominee</th>
                    <th>Info</th>
                    <th>Won</th>
                </tr>
                <xsl:for-each select="/Oscars/Nomination">
                <tr>
                    <td width="20%"><xsl:value-of select="Year"/></td>
                    <td width="20%"><xsl:value-of select="Category"/></td>
                    <td width="20%"><xsl:value-of select="Nominee"/></td>
                    <td width="20%"><xsl:value-of select="Info"/></td>
                    <td width="20%"><xsl:value-of select="Won='yes'"/></td>
                </tr>
                </xsl:for-each>
             </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>

