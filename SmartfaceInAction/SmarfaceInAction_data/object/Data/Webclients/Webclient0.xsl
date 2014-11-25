<WEBCLIENT ID="BE326890-073A-4F1D-9C9C-2FB3FA46B4B4" Name="wcListView" HostUrl="http://services.smartface.io/SmartfaceInAction/News?page=${pagenumber}&amp;rowNumber=${rowNumber}" Method="0" ContentType="json" AddUserInfo="0" NotifyUpdateStatus="1" MaxReceiveCount="0" TimeOutInterval="60" RequestRawBodyEnabled="0" RequestRawBodyContentType="application/json" WriteMode="1">
	<SendParams>
		<Params>
			<Param Name="rowNumber" Value="Data.wcListView_InDSet.rowNumber" SROffset="0" Parent="URL" />
			<Param Name="pagenumber" Value="Data.wcListView_InDSet.pagenumber" SROffset="1" Parent="URL" />
		</Params>
	</SendParams>
	<ReceiveParams>
		<Params>
			<Param XPath="$.news" Value="Data.wcListView_OutDSetnews.news" Parent="BODY" />
			<Param XPath="$.news.title" Value="Data.wcListView_OutDSetnews.title" Parent="BODY" />
			<Param XPath="$.news.id" Value="Data.wcListView_OutDSetnews.id" Parent="BODY" />
			<Param XPath="$.news.type" Value="Data.wcListView_OutDSetnews.type" Parent="BODY" />
			<Param XPath="$.news.description" Value="Data.wcListView_OutDSetnews.description" Parent="BODY" />
			<Param XPath="$.news.image.id" Value="Data.wcListView_OutDSetnews.id1" Parent="BODY" />
			<Param XPath="$.news.image.url" Value="Data.wcListView_OutDSetnews.url" Parent="BODY" />
		</Params>
	</ReceiveParams>
	<CustomRequestHeaders>
	</CustomRequestHeaders>
	<ONSYNDICATIONSUCCESS script="Project_wcListView_OnSyndicationSuccess(e);" />
</WEBCLIENT>
