<WEBCLIENT ID="61F1A29C-FF96-4451-922E-608F42B1D058" Name="wcSquareView" HostUrl="http://services.smartface.io/SmartfaceInAction/News?page=${pageNumber}&amp;rowNumber=${rowNumber}" Method="0" ContentType="json" AddUserInfo="0" NotifyUpdateStatus="1" MaxReceiveCount="0" TimeOutInterval="60" RequestRawBodyEnabled="0" RequestRawBodyContentType="application/json" WriteMode="1">
	<SendParams>
		<Params>
			<Param Name="rowNumber" Value="Data.wcSquareView_InDSet.rowNumber" SROffset="0" Parent="URL" />
			<Param Name="pageNumber" Value="Data.wcSquareView_InDSet.pageNumber" SROffset="1" Parent="URL" />
		</Params>
	</SendParams>
	<ReceiveParams>
		<Params>
			<Param XPath="$.news" Value="Data.wcSquareView_OutDSetnews.news" Parent="BODY" />
			<Param XPath="$.news.title" Value="Data.wcSquareView_OutDSetnews.title" Parent="BODY" />
			<Param XPath="$.news.id" Value="Data.wcSquareView_OutDSetnews.id" Parent="BODY" />
			<Param XPath="$.news.type" Value="Data.wcSquareView_OutDSetnews.type" Parent="BODY" />
			<Param XPath="$.news.description" Value="Data.wcSquareView_OutDSetnews.description" Parent="BODY" />
			<Param XPath="$.news.image.id" Value="Data.wcSquareView_OutDSetnews.id1" Parent="BODY" />
			<Param XPath="$.news.image.url" Value="Data.wcSquareView_OutDSetnews.url" Parent="BODY" />
		</Params>
	</ReceiveParams>
	<CustomRequestHeaders>
	</CustomRequestHeaders>
	<ONSYNDICATIONSUCCESS script="Project_wcSquareView_OnSyndicationSuccess(e);" />
</WEBCLIENT>
