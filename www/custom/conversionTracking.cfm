<cfoutput>
<cfif caller.myfusebox.originalcircuit eq 'checkout' and caller.myfusebox.originalfuseaction eq 'receipt'>
	<cftry>
		<script>
			v65.conversionTracking.dataset='<data amt="#caller.currentOrder.orderTotal#" unit="Dollars" accumulate="true" />';
		</script>
		
		<cfcatch>
			<cfmail from="jared@vin65.com" to="jared@vin65.com" subject="Ravenswood Conversion Tracking Fail" type="html">
				<cfdump var="#cfcatch#">
			</cfmail>
		</cfcatch>
	</cftry>
</cfif>
</cfoutput>