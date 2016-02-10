<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns="http://www.w3.org/1999/xhtml">

    <xsl:template match="/proceedings">
        <h1><xsl:value-of select="name"/></h1>
        <p>

         <xsl:for-each select="contents/article/title">
             <body>"<xsl:value-of select="."/>"</body>
          </xsl:for-each>

        </p>
    </xsl:template>



</xsl:stylesheet>